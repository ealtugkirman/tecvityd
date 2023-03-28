function Card({ icon, iconColor, title, description }) {
  const Icon = icon;
  
  return (
    <div className="bg-gradient-to-r from-yellow-600 via-green-700 to-green-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 w-4/5 lg:w-1/5 rounded-lg p-6">
      <Icon className={`text-3xl  mx-auto flex ${iconColor} mb-4`} />
      <h2 className="text-xl text-green-100 font-bold mb-2">{title}</h2>
      <p className="font-first text-green-200">{description}</p>
    </div>
  );
}

export default Card