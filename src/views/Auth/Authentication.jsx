<fieldset className="w-1/4 border p-4">
  <legend>Sign In</legend>
  <form className="grid grid-cols-[1fr_2fr] grid-rows-3">
    <label htmlFor="username" className="self-center text-right">
      Username
    </label>
    <input
      id="username"
      type="text"
      name="username"
      className="border p-2 m-3"
      required
    />
    <label htmlFor="password" className="self-center text-right">
      Password
    </label>
    <input
      id="password"
      type="password"
      name="password"
      className="border p-2 m-3"
      required
    />
    <button
      type="submit"
      className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
    >
      Sign In
    </button>
  </form>
  <p className="text-center text-red-500 font-bold">Error message goes here</p>
</fieldset>;
