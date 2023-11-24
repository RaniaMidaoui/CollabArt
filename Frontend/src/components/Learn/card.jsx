import "./card.css"

export default function Card(props) {
    return (
          <article className="w-full bg-white rounded-2xl shadow-xl min-[480px]:flex items-stretch focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" x-show="activeTab === 1" x-transition:enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first" x-transition:enter-start="opacity-0 -translate-y-8" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-12">
            <figure className="min-[480px]:w-1/2 p-2">
              <img   className="w-full h-[180px] object-cover rounded-lg"  width="304" height="214" src={props.image} alt="Tab 01" />
            </figure>
            <div className="min-[480px]:w-1/2 flex flex-col justify-center p-5 pl-3">
              <div className="flex justify-between mb-1">
                <header>
                  <div className="font-caveat text-xl font-medium text-warmGray-500">{props.type}</div>
                  <h1 className="text-xl font-bold text-slate-900">{props.title}</h1>
                </header>
                <button className="shrink-0 h-[30px] w-[30px] border border-slate-200 hover:border-slate-300 rounded-full shadow inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out" aria-label="Like">
                  <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                    <path d="M6.985 1.635C5.361.132 2.797.162 1.21 1.7A3.948 3.948 0 0 0 0 4.541a3.948 3.948 0 0 0 1.218 2.836l5.156 4.88a.893.893 0 0 0 1.223 0l5.165-4.886a3.925 3.925 0 0 0 .061-5.663C11.231.126 8.62.094 6.985 1.635Zm4.548 4.53-4.548 4.303-4.54-4.294a2.267 2.267 0 0 1 0-3.275 2.44 2.44 0 0 1 3.376 0c.16.161.293.343.398.541a.915.915 0 0 0 .766.409c.311 0 .6-.154.767-.409.517-.93 1.62-1.401 2.677-1.142 1.057.259 1.797 1.181 1.796 2.238a2.253 2.253 0 0 1-.692 1.63Z" />
                  </svg>
                </button>
              </div>
              <div className="text-slate-500 text-sm line-clamp-3 mb-2">
                {props.description}
              </div>
              <div className="text-right bottom-0">
                <span className="text-sm font-medium text-slate-900">{props.price} <sup>{props.currency}</sup>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <a className="text-sm font-medium text-warmGray-500 hover:text-warmGray-800 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-out" href={props.link}>Read more &gt;</a>
              </div>
            </div>
          </article>
    )
}