export default function Login() {
  return (
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
        <li>
          <button className="rounded-full bg-red-400 py-2 px-3">
            <a
              href="#"
              class="block bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
              aria-current="page"
            >
              Login
            </a>
          </button>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark: md:dark:hover:bg-transparent"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}
