import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, readingTime }) => {


    return (
        <div className="w-1/3">
            <h3 className="bg-blue-200 p-3 m-3 mb-3 rounded-xl text-2xl">Total Reading time : {readingTime}</h3>
            <div className=" text-center bg-slate-300 rounded-lg py-5 px-1">
                <h1 className="text-3xl font-semibold mb-4">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};

export default Bookmarks;