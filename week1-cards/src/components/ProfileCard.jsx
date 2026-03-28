const ProfileCard = ({ name, role, bio, skills }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-72 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="w-16 h-16 bg-indigo-500 rounded-full mb-4"></div>
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-indigo-600 text-sm mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Skills:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {(skills || []).map((skill, index) => (
            <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
  
};
ProfileCard.defaultProps = {
  name: "Unknown",
  role: "No role assigned",
  bio: "No bio available.",
  skills: [],
};
export default ProfileCard;