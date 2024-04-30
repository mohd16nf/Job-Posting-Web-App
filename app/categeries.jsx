import React from 'react';

const ExploreByCategory = () => {
  return (
    <div className="" id='categeries-cards-container'>
      <div className="flex justify-between items-center mt-20" >
        <h2 className="font-bold" id='categery-heading'>Explore by Category</h2>
        <a href="#" className="btn-explore-all">Explore All</a>
      </div>

      <div className="flex flex-wrap mt-10 justify-center align-items-center" id='categery-card-container'>
        <Card icon="&#128197;" title="Business Development" vacancies={5} />
        <Card icon="&#128100;" title="Customer Service" vacancies={3} />
        <Card icon="&#128187;" title="Development" vacancies={6} />
        <Card icon="&#9998;" title="Design" vacancies={2} />
        <Card icon="&#127968;" title="Marketing and Management" vacancies={4} />
        <Card icon="&#128170;" title="Sales & Communication" vacancies={7} />
        <Card icon="&#128202;" title="Project Management" vacancies={3} />
        <Card icon="&#129489;" title="Human Resource" vacancies={8} />
      </div>
    </div>
  );
}

const Card = ({ icon, title, vacancies }) => {
  return (
    <div className="categery-cards">
      <div className="bg-white p-4 rounded-lg shadow-md m-5">
        <div className="text-center text-3xl mb-2" dangerouslySetInnerHTML={{ __html: icon }} />
        <div className="text-lg font-bold mb-2">{title}</div>
        <div className="text-gray-600">Open vacancies: {vacancies}</div>
      </div>
    </div>
  );
}

export default ExploreByCategory;
