

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const {title} = bookmark
    return (
        <div className=" p-3 m-3 bg-white rounded-xl text-start ">
            <h3 className="text-2xl">{title}</h3>
            
        </div>
    );
};

export default Bookmark;