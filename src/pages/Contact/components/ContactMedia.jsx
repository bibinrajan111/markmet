function ContactMedia() {
  return (
    <section className="content-width contact-media">
      <article className="contact-media-card">
        <img src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80" alt="Team discussion" />
      </article>
      <article className="contact-media-card">
        <video autoPlay muted loop playsInline>
          <source src="https://player.vimeo.com/external/395591344.sd.mp4?s=906b464613cbcc8d6400ed1d5d295df1c548d652&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </article>
    </section>
  );
}

export default ContactMedia;
