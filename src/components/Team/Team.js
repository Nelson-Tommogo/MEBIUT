import './Team.css';
import Footer from "../Footer";
import teamMember1 from '../../assets/home/charles.jpg'; 
import teamMember2 from '../../assets/home/profile.jpeg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    id: 1,
    name: 'Charles Makuka',
    role: 'Chief Executive Officer (CEO)',
    image: teamMember1,
    expertise: 'Leadership, Business Strategy, and Product Development.',
    bio: 'With over 4 years of experience in the food and engineering industries, I am the founder and CEO of MEBIUT Ltd, where I develop high-quality, locally inspired sauces like Kenyan Taste, leveraging my engineering background to optimize production processes while innovating and honoring Kenya\'s culinary heritage.',
    socialLinks: {
      twitter: 'https://x.com/makuka_cha39019?t=oELMEi0gNBY3NU9vHt0abQ&s=09',
      linkedIn: 'https://www.linkedin.com/in/charles-makuka-8b2b62273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      facebook: 'https://www.facebook.com/charles.makuka.509?mibextid=ZbWKwL',
    },
  },
  {
    id: 2,
    name: 'Nelson Tommogo',
    role: 'Chief Technology Officer (CTO)',
    image: teamMember2,
    expertise: 'Software Engineering, Mobile and Web Engineering',
    bio: 'As the CTO of MEBIUT, I drive technological innovation and process optimization to enhance product quality and efficiency while leading a multidisciplinary team to develop and implement strategies that align with the company\'s goals.',
    socialLinks: {
      twitter: 'https://x.com/nelson_tommogo',
      linkedIn: 'https://www.linkedin.com/in/nelson-tommogo/',
      github: 'https://github.com/Nelson-Tommogo',
    },
  },
];

const Team = () => {
  return (
    <>
      <div className="company-team-container">
        <header className="team-header">
          <h1>Meet Our Leadership Team</h1>
          <p>The passionate individuals behind Mebiut's authentic Kenyan flavors</p>
        </header>

        {/* Team Member Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card-inner">
                <div className="team-image-container">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-expertise">
                    <span>{member.expertise}</span>
                  </div>
                  <div className="team-bio">
                    <p>{member.bio}</p>
                  </div>
                  <div className="social-links">
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    )}
                    {member.socialLinks.linkedIn && (
                      <a href={member.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                    {member.socialLinks.facebook && (
                      <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;