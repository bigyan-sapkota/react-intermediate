import { FaExclamationCircle } from "react-icons/fa";
import ApiLoader from "../components/api-loader";
import useFetchPosts from "../queries/use-fetch-posts";

export default function BlogPage() {
  const { data: posts, isLoading, isError } = useFetchPosts();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <main>
      <section className="min-h-[75dvh] px-14 mx-auto max-w-[1350px] py-10">
        <h1 className="text-4xl font-bold text-center">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {posts?.map((post, index) => {
            return (
              <div
                key={post.id}
                className="bg-red-50/50 border border-gray-200 shadow-md rounded-xl p-6"
              >
                <h1 className="text-2xl font-semibold capitalize">
                  {index + 1}. {post.title}
                </h1>
                <p className="text-gray-600">{post.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

// error

// (
//   <div className="min-h-[75dvh] flex items-center justify-center">
//     <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm">
//       <FaExclamationCircle className="text-red-500 text-lg" />
//       <span className="text-sm font-medium">
//         Something went wrong. Please try again later
//       </span>
//     </div>
//   </div>
// );

// loading

// (
//   <div className="min-h-[75dvh] flex justify-center items-center">
//     <ApiLoader />
//   </div>
// );
