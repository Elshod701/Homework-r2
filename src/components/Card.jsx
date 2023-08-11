const Card = ({ id, title, body }) => {
  return (
    <a
      href="#"
      class="block max-w-sm p-6 relative bg-white border border-gray-200 h-[300px] rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">H{body}</p>
      <p className="text-white absolute bottom-[12px] font-bold mt-[10px] mr-[200px]">#{id}</p>
    </a>
  );
};

export default Card;
