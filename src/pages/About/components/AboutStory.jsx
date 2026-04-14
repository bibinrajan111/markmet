function AboutStory() {
  return (
    <section className="about-story content-width">
      <article className="glass-card about-block">
        <h3>Who We Are</h3>
        <p>Markmet operates from Piravom, Kerala, delivering integrated marketing and digital production services for startups, local businesses, and scaling enterprises. We believe marketing should not be fragmented—strategy, creatives, media, and technology must collaborate in one ecosystem.</p>
        <p>Our teams blend audience research, content architecture, media buying, and creative direction so that each campaign builds long-term brand equity while driving short-term conversions.</p>
      </article>
      <article className="about-video-wrap">
        <video autoPlay muted loop playsInline>
          <source src="https://player.vimeo.com/external/447697281.sd.mp4?s=1bd387f57be16eef88239003ce1bb4f001357349&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </article>
    </section>
  );
}

export default AboutStory;
