import { Avatar } from '@mui/material';
import React from 'react';

// Each .bio-item here could be extracted into a presentational component
export default function About() {
  return (
    <div>
      <h1>About Us</h1>

      <div className="bio-item">
        <Avatar
          alt="DJ Drakos"
          sx={{ width: 90, height: 90 }}
          src="cool-dj.jpg"
        />
        <article>
          <h2>
            DJ Drakos
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/dj-drakos/"
            >
              <Avatar
                alt="linkedin"
                sx={{ width: 50, height: 50 }}
                src="linkedin.png"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dianajodrakos"
            >
              <Avatar
                alt="github"
                sx={{ width: 50, height: 50 }}
                src="github.png"
              />
            </a>
          </h2>
          <p>
            A Full-stack Engineer, whole systems thinker, and art school
            dropout. I love solving a good logic puzzle and filtering signal
            from noise. Sometimes I knit, bike, or sleep, as needed.
          </p>
        </article>
      </div>

      <div className="bio-item">
        <Avatar
          alt="Dot Kubisiak"
          sx={{ width: 90, height: 90 }}
          src="kubiphoto.jpg"
        />
        <article>
          <h2>
            .Kubisiak
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kubisiak/"
            >
              <Avatar
                alt="linkedin"
                sx={{ width: 50, height: 50 }}
                src="linkedin.png"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mckubisiak"
            >
              <Avatar
                alt="github"
                sx={{ width: 50, height: 50 }}
                src="github.png"
              />
            </a>
          </h2>
          <p>
            A queer trans Software Engineer. I love mutually developing with
            people and supporting everyone's common as well as individuals
            goals. <a href="https://kubisiak.darkroom.tech/">Photography</a> and{' '}
            <a href="https://docs.google.com/document/d/1Tb3ETGO7tTbJFjT9ZHOJqpmd-qvIyq-JAkz8kT4pQfY/edit">
              Mutual Aid
            </a>{' '}
            are other avenues I like to participate in community.
          </p>
        </article>
      </div>

      <div className="bio-item">
        <Avatar
          alt="Isaac Ewing"
          sx={{ width: 90, height: 90 }}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG9gSEPQJjNYg/profile-displayphoto-shrink_200_200/0/1620148404124?e=1639612800&v=beta&t=8EYusWPIEYkHQcmE9yfMwGtFij98CBlTcjFtvWAkkbo"
        />

        <article>
          <h2>
            Isaac Ewing
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/isaac-ewing-6ba3b5211/"
            >
              <Avatar
                alt="linkedin"
                sx={{ width: 50, height: 50 }}
                src="linkedin.png"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Isaac-Ewing"
            >
              <Avatar
                alt="github"
                sx={{ width: 50, height: 50 }}
                src="github.png"
              />
            </a>
          </h2>
          <p>
            I am a Full-stack Developer who loves to solve complex coding
            problems involving math. In my free time I enjoy playing various
            sports with my friends poorly, reading, and playing video games
            (also poorly). I originally became interested in programming when I
            decided that I didn't want to use my degree in Chemical Engineering,
            and within a few days of first writing code, I knew that I wanted to
            do it professionally.
          </p>
        </article>
      </div>

      <div className="bio-item">
        <Avatar
          alt="Ben Francka"
          sx={{ width: 90, height: 90 }}
          src="ben-profile.jpg"
        />
        <article>
          <h2>
            Ben Francka
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ben-francka/"
            >
              <Avatar
                alt="linkedin"
                sx={{ width: 50, height: 50 }}
                src="linkedin.png"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/BenFrancka"
            >
              {/* <img className="icon" src="./github.png" alt="Github" /> */}
              <Avatar
                alt="github"
                sx={{ width: 50, height: 50 }}
                src="github.png"
              />
            </a>
          </h2>
          <p>
            A Full-stack Developer with a knack for working with teams and
            solving problems. Considering I grew up on a cattle farm working
            with my cousins, and have spent over a decade in professional
            kitchens as a chef working closely with teams of all backgrounds, I
            feel like I am adept at meeting teammates where they are with
            respect and enough motivation to keep everyone focused on the task
            at hand.
          </p>
        </article>
      </div>
    </div>
  );
}
