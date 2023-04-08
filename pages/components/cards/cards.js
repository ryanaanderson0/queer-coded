export default function Cards() {
  return (
    <div className="min-h-[50vh]">
      <h1 className="text-center antialiased font-semibold text-5xl">
        What's your stack?
      </h1>
      <div className="flex justify-evenly items-center">
        <div className="w-fit p-4 border-solid border-2 border-sky-500">
          <h2 className="text-2xl">Front End</h2>
          <hr />
          <h4>Card Subtitle</h4>
          <button>Test</button>
        </div>
        <div>
          <h2>Back End</h2>
          <hr />
          <h4>Card Subtitle</h4>
          <button>Test</button>
        </div>
        <div>
          <h2>Full Stack</h2>
          <hr />
          <h4>Card Subtitle</h4>
          <button>Test</button>
        </div>
      </div>
    </div>
  );
}
