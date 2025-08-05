export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full py-6 flex items-center justify-center bg-transparent'>
      <p className='text-sm text-gray-400'>
        © {year} <span className='font-semibold text-gray-500'>포텐셜봇</span>
      </p>
    </footer>
  );
}
