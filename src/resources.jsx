const otherResources = [
  {
    name: "Creative Lives In Progress",
    website: "https://www.creativelivesinprogress.com/opportunitiesboard",
  },
  {
    name: "Silicon Milkround",
    website: "https://www.siliconmilkroundabout.com/",
  },
  { name: "View my Github", website: "https://github.com/jones58" },
];

function Resources() {
  return (
    <div>
      <h2 className="mb-8 pt-5 text-center text-3xl font-bold">
        More resources:
      </h2>
      <div className="flex flex-wrap justify-center">
        {otherResources.map((otherResource) => (
          <a
            href={otherResource.website}
            target="_blank"
            rel="noreferrer"
            key={otherResource.name}
            className="m-2 inline-block"
          >
            <button className="transform rounded-lg bg-fuchsia-800 px-6 py-4 text-xl font-semibold text-slate-200 shadow-md transition hover:scale-105 hover:bg-fuchsia-900">
              {otherResource.name}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Resources;
