// Supabase configuration
const SUPABASE_URL = 'https://tarbsjeluiovntyasmjw.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcmJzamVsdWlvdm50eWFzbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDE4MTUsImV4cCI6MjA2NTgxNzgxNX0.9NTOQ-hoiZYur7sSdBeVQQzO69RcNA5Aa-a5yz66eqQ';

// Function to fetch users from Supabase
async function fetchUsers() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
      headers: {
        apikey: SUPABASE_API_KEY,
        Authorization: `Bearer ${SUPABASE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await response.json();

    // 한국 시간으로 변환된 created_at_kst 필드 추가
    const usersWithKST = users.map((user) => {
      const utcDate = new Date(user.created_at);
      const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000); // UTC + 9시간
      return {
        ...user,
        created_at_kst: kstDate.toLocaleString('ko-KR', {
          timeZone: 'Asia/Seoul',
        }),
      };
    });

    return usersWithKST;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}


// Function to send emails based on user type
async function sendEmailsByType() {
  try {
    const users = await fetchUsers();

    // Group users by type
    const usersByType = {
      '취업준비생': [],
      '이직준비생': [],
      '직장인(사원급)': [],
      '직장인(리더급)': [],
    };

    users.forEach((user) => {
      if (usersByType[user.user_type]) {
        usersByType[user.user_type].push(user);
      }
    });

    return usersByType;
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}

async function insertUser(email, user_type) {
  const utcNow = new Date();
  const kstNow = new Date(utcNow.getTime() + 9 * 60 * 60 * 1000);

  const response = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_API_KEY,
      Authorization: `Bearer ${SUPABASE_API_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify([
      {
        email,
        user_type,
        created_at: utcNow.toISOString(),        // UTC 기준
        created_at_kst: kstNow.toISOString(),    // KST 기준으로 저장
      },
    ]),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Error inserting user:', error);
    throw new Error('Insert failed');
  }

  const insertedUser = await response.json();
  return insertedUser;
}


export { fetchUsers, sendEmailsByType, insertUser };
