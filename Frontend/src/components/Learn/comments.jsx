export function Comment(props){
    return (
<article className="z-1 p-3 text-base bg-white rounded-lg">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 "><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src={"https://ui-avatars.com/api/?name="+props.commenter}
                        />{props.commenter}</p>
                <p className="text-xs text-gray-600"><time>{props.datetime}</time></p>
            </div>
            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-xs font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
            <div id="dropdownComment1"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow ">
                <ul className="py-1 text-sm text-gray-700 "
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 ">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 ">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 ">Report</a>
                    </li>
                </ul>
            </div>
        </footer>
        <p className="text-gray-500 text-sm -mt-2 ml-8">{props.content}</p>
    </article>
    )
}

export default function CommentsBox(){
    return (
    
        <form className="mb-1 w-11/12">
            <div className="py-2 px-4 mb-1 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                <label for="comment" className="sr-only">Your comment</label>
                <textarea id="comment" rows="2"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                    placeholder="Write a comment..." required></textarea>
            </div>
            <button type="button" className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-900 transition-colors duration-200 bg-gray-200 hover:bg-gray-7   00 border-gray-700 rounded-lg gap-x-2 sm:w-auto">
            <svg className="w-5 h-5" fill="#000000" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>reply</title> <path d="M0 14.031l8.563 7.938v-3.969s12.156-3.125 15.406 7.656c0 0 1.156-15.438-15.406-15.438v-3.875z"></path> </g></svg>
                  <span>Post</span>
                </button>
        </form>
    )
}