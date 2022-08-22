import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard({title, body, githubURL, demoURL}) {
  return (
    <Card className="my-2" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Subtitle>{title}</Card.Subtitle>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="secondary" size="sm" href="#">Github</Button>
        {demoURL && <Button className="mx-2" variant="secondary" size="sm" href="#">Demo</Button>}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;