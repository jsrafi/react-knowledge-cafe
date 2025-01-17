
const Blog = ({ blog }) => {
    const { cover_img, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="w-[90%] mb-16 ">
            <img className="w-full h-[70vh]  rounded-lg shadow-2xl" src={cover_img} alt="" />
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3" >
                    <img className="w-[65px] h-[65px] rounded-full object-cover" src={author_img} alt="" />

                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className=" flex items-center gap-2">
                    <h4>{reading_time} min read</h4>
                    <button>y</button>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <h1 className="text-4xl font-bold">{title}</h1>
                <div className="flex gap-3">
                    <p>{hashtags[0]}</p>
                    <p>{hashtags[1]}</p>
                </div>
                <p>mark as read</p>
            </div>
        </div>
    );
};

export default Blog;