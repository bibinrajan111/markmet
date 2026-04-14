import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const values = [
  ['Transparency', 'We share plans, budgets, and outcomes clearly with clients at every stage.'],
  ['Creative Performance', 'Our creative assets are built to inspire emotion and produce measurable action.'],
  ['Continuous Innovation', 'We test, analyze, and optimize continuously for market shifts and trends.'],
];

function AboutValues() {
  return (
    <section className="about-values content-width">
      <h3>Our Core Values</h3>
      {values.map(([title, desc]) => (
        <Accordion key={title} sx={{ borderRadius: '14px', marginBottom: '.7rem', border: '1px solid rgba(61,106,108,0.2)' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </section>
  );
}

export default AboutValues;
