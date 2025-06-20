// Supabase configuration
const SUPABASE_URL = 'https://tarbsjeluiovntyasmjw.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcmJzamVsdWlvdm50eWFzbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDE4MTUsImV4cCI6MjA2NTgxNzgxNX0.9NTOQ-hoiZYur7sSdBeVQQzO69RcNA5Aa-a5yz66eqQ';
const TABLE = 'users';  

// Function to fetch users from Supabase
async function fetchUsers() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
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
      '취준생': [],
      '이직 준비생': [],
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

export { fetchUsers, sendEmailsByType };
