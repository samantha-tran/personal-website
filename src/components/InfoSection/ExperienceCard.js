import Card from 'react-bootstrap/Card';

function ExperienceCard({title, subtitle, body}) {
  return (
    <Card className="my-2 w-100">
        <Card.Body>
            <Card.Subtitle className="mb-2">{title}</Card.Subtitle>
            <Card.Text className="mb-2 text-muted">{subtitle}</Card.Text>
            <Card.Text>
            {body}
            </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;