import React from 'react';

const teamMembers = [
  {
    name: 'Barbara Milewski',
    role: 'Project Lead',
    image: 'TODO',
  },
  {
    name: 'Brenna Norris',
    role: 'Software Dev./Tech Project Manager',
    image: 'TODO',
  },
  {
    name: 'Charlie Gao',
    role: 'Senior Software Developer',
    image: 'TODO',
  },
  {
    name: 'Georgia Lechlitner',
    role: 'Product Lead',
    image: 'TODO',
  },
  {
    name: 'Aiman Shahpurwala',
    role: 'GIS Analyst',
    image: 'TODO',
  },
  {
    name: 'Jessica Bellwoar',
    role: 'Strategist & Development Lead',
    image: 'TODO',
  },
  {
    name: 'Sara Lasseter',
    role: 'Market Research & Communications',
    image: 'TODO',
  },
  {
    name: 'Cole Stites-Clayton',
    role: 'Software Engineer',
    image: 'TODO',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-8">
          HeatPulse aims to improve heat resilience action by providing accessible and actionable data to city officials so they can make data-driven decisions, understand best practices, and compare implemented solutions in similar cities of geography, climate, topography, culture and other relevant factors.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Meet Our Team
          </h2>
          <p className='text-center m-4'>We are a group of Climatebase fellows brought together by our experiences with extreme heat.</p>
          <div className="grid md:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}