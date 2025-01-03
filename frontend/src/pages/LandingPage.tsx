import React, { useState } from 'react';

export function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to HeatPulse</h2>
          <p className="text-gray-600 mb-8">
            We aim to improve heat resilience action by providing accessible and actionable data to city officials so they can make <i>data-driven</i> decisions, understand best practices, and compare implemented solutions in similar cities of geography, climate, and culture.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {/*</div><img src={require('./path/to/image.png')} alt="heat wave char 50 states" /> alt="description" style={{ width: '200px' }} </img> */}

          <ul>
            <li>Heat is the #1 weather-related killer according to the National Weather Service</li>
            <li>Heat costs the US economy ~$100 billion per year and is projected to increase to $200 billion by 2030 and $500 billion by 2050</li>
            <li>References to heat in US municipal plans grew from 4% in 2015 to 78% in 2020</li>
            <li>Many city plans are inadequate to tackle urban heat, underfunded programming, and lack the hyper-local logistical data needed to pinpoint specific blocks and neighborhood level analysis.</li>
            <li>City Officials report inequities in solutions, difficulties in implementing solutions, and more. That's why we've created HeatPulse -- to help bridge those gaps and facilitate better heat action.</li>
          </ul>
        </div>

        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Tool</h3>
        <p className="text-gray-600 mb-8">
          Explore HeatPulse to learn how your city can identify best practices and lessons to be learned from existing heat adaptation and mitigation efforts.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          {/* First Block */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '2px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold'
              }}>
                i
              </div>
              <h3>Interactive Map</h3>
            </div>
            <p>An interactive geospatial map of the United States and learn where resources are needed most critically at a local level.</p>
          </div>

          {/* Second Block */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '2px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold'
              }}>
                i
              </div>
              <h3>Case Studies</h3>
            </div>
            <p>[Planned] Using climate, geography and other characteristics relevant to heat action and resilience, compare your city to another.</p>
          </div>

          {/* Third Block */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '2px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold'
              }}>
                i
              </div>
              <h3>Guidance</h3>
            </div>
            <p>[Planned] Guidance on effectively engaging with communities to get local data about heat impacts and people's lived experiences, as well as gauging what solutions would be best received.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}