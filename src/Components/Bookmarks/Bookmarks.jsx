import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    
   
    return (
        <div className="w-1/3 text-center bg-slate-300 rounded-lg py-5 px-1">
            <h1 className="text-3xl font-semibold mb-4">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

export default Bookmarks;