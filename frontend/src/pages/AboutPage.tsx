import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Katherine Lu',
    role: 'Lead Researcher',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500&h=500',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Urban Planning Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&h=500',
  },
  {
    name: 'Dr. Aisha Thompson',
    role: 'Climate Scientist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500&h=500',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-8">
            HeatPulse is dedicated to addressing one of the most pressing challenges
            of our time: urban heat vulnerability. We believe in creating resilient
            communities through data-driven solutions and collaborative approaches
            to combat extreme heat events.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-600 text-lg mb-6">
            We envision a future where cities are equipped with the knowledge,
            tools, and strategies needed to protect their communities from extreme
            heat events. Through our platform, we aim to facilitate the sharing of
            best practices and innovative solutions across urban areas in America.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <p className="text-orange-700">
              "Together, we can build heat-resilient communities that protect our
              most vulnerable populations and create sustainable urban environments
              for future generations."
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
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