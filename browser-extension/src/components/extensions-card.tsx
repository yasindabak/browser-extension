import SwitchButton from "./switch-button";
import type { Extension } from "../lib/types";

type ExtensionsCardProps = {
  extensions: Extension[];
  onDeleteExtension: (id: Extension["id"]) => void;
  onToggleExtension: (id: Extension["id"]) => void
};

export default function ExtensionsCard({ extensions, onDeleteExtension, onToggleExtension }: ExtensionsCardProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
      {extensions.map((extension) => (
        <article
          key={extension.id} 
          className="border border-neutral-200 dark:border-neutral-600 rounded-[1.25rem] p-5 bg-neutral-50 dark:bg-neutral-800 h-[200px] flex flex-col justify-between"
        >
          {/* card content */}
          <div className="flex items-start gap-4">
            <img
              src={extension.logo}
              alt={`${extension.name} logo`}
              width={60}
              height={60}
            />
            <div>
              <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-50 mb-2">
                {extension.name}
              </h2>
              <p>{extension.description}</p>
            </div>
          </div>

          {/* card footer */}
          <div className="flex items-center justify-between">
            <button 
            onClick={() => onDeleteExtension(extension.id)}
             className="border border-neutral-300 dark:border-neutral-600 rounded-full py-2 px-4 cursor-pointer hover:text-neutral-50 hover:bg-red-700 dark:hover:text-neutral-900 dark:hover:bg-red-400 hover:border-transparent duration-300">
              Kaldır
            </button>
            <SwitchButton checked={extension.isActive} 
            onChange={() => onToggleExtension(extension.id)}/>
          </div>
        </article>
      ))}
    </div>
  );
}
