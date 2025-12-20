import { FaStar, FaEye, FaBookmark, FaShareAlt, FaArrowRight } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        image_url,
        details,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md rounded-lg">

            {/* Header */}
            <div className="flex items-center justify-between p-4 rounded-t-lg bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-sm">{author.name}</p>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toDateString()}
                        </p>
                    </div>
                </div>
                <div className=" flex gap-3 text-gray-500">
                    <FaBookmark size={20} className="cursor-pointer" />
                    <FaShareAlt size={20} className="cursor-pointer" />
                </div>
            </div>

            {/* Body */}
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <figure className="my-3">
                    <img
                        src={image_url}
                        alt={title}
                        className="rounded-lg w-full"
                    />
                </figure>
                <p className="text-sm text-gray-600">
                    {details.length > 280 ? details.slice(0, 280) + "..." : details}
                    <button className="text-orange-400 cursor-pointer text-lg font-semibold hover:underline">
                        Read More
                    </button>

                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 border-t border-gray-200 pt-4">
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 text-orange-400">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={index < rating.number ? "text-orange-400" : "text-gray-300"}
                            />
                        ))}
                        <span className="ml-2 text-gray-700 font-medium">{rating.number}</span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-1 text-gray-500">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default NewsCard;
