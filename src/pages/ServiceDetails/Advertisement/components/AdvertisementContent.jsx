const points = [
  'Discovery workshop and competitor benchmarking to identify market whitespace.',
  'Tailored campaign roadmap with quarterly milestones and accountability loops.',
  'Creative and channel alignment for consistent messaging across touchpoints.',
  'Weekly analytics review with transparent performance reporting and recommendations.',
];

function AdvertisementContent() {
  return (
    <section className="content-width service-detail-content">
      <article className="glass-card">
        <h3>How Markmet delivers Advertisement</h3>
        <p>Every engagement begins with business context, audience behavior, and measurable goals. We then build and execute a practical plan that combines creative quality with performance rigor.</p>
        <ul>
          {points.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
      <article className="service-video-card">
        <video autoPlay muted loop playsInline>
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=6f6b89d067f7ec4db39f1741314a87d6ec8e2cc5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </article>
    </section>
  );
}

export default AdvertisementContent;
