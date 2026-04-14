const stats = [
  ['200+', 'Campaigns launched'],
  ['95%', 'Client retention focus'],
  ['6', 'Integrated core services'],
  ['24/7', 'Optimization rhythm'],
];

function HomeHero() {
  return (
    <section className="home-hero content-width">
      <div>
        <h3>From strategy to execution, we build omnichannel growth systems.</h3>
        <p>Our approach blends research, customer insights, creative production, and performance marketing into one agile engine. This ensures every rupee, ad, reel, and landing page contributes to measurable business outcomes.</p>
      </div>
      <div className="stats-grid">
        {stats.map(([value, label]) => (
          <article key={label} className="glass-card stat-card">
            <h4>{value}</h4>
            <p>{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomeHero;
