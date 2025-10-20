export function Footer() {
  return (
    <footer className="border-t text-center text-sm py-6 text-gray-500 mt-10">
      © {new Date().getFullYear()} Rent In Hungary. All rights reserved. <br/>
      Site designed by <a href="https://tamas.io" className="text-gray-700 underline hover:text-gray-900">Kim Zheng</a>.
    </footer>
  );
}
