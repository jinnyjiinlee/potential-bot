// Supabase configuration
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';

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
    return users;
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
      취준생: [],
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
