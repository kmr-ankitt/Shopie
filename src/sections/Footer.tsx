import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="#firstPage">Home</a>
          <a className="link link-hover" href="#secondPage">Catalogue</a>
          <a className="link link-hover" href="#thirdPage">Favourite</a>
          <a className="link link-hover" href="https://github.com/kmr-ankitt">Github</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/kmr-ankit/">
            <LinkedInIcon />
            </a>
            <a href="https://github.com/kmr-ankitt">
            <GitHubIcon />
            </a>
            <a href="https://x.com/kmr_ankitt">
            <XIcon />
            </a>
            <a href="https://instagram.com/kmr_ankitt">
            <InstagramIcon />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {date}</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
