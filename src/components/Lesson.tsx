import { useCallback, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

function Lesson() {

    const lessonText = `lorem ipsum dolor sit amet consectetur adipisicing elit.
    vel quos odio possimus tenetur corrupti in provident ut
    sequi nemo sunt placeat autem deserunt dolor nihil,
    necessitatibus veritatis aliquam officia temporibus.`

    const [isCorrectText, setIsCorrectText] = useState(true);

    const [keyedText, setKeyedText] = useState('');

    const [lessonStarted, setLessonStarted] = useState('Start');

    const startRef = useRef<HTMLButtonElement>(null);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        //console.log(`Key pressed: ${event.key}`);
        setKeyedText(keyedText => {
            let newText = keyedText + event.key;
            setIsCorrectText(lessonText.startsWith(newText))
            return newText;
        });
    }, [lessonText]);

    const startLesson = () => {
        if (lessonStarted === 'Start') {
            document.addEventListener('keydown', handleKeyPress);
            setLessonStarted('Retry');
        } else {
            document.removeEventListener('keydown', handleKeyPress);
            setLessonStarted('Start');
            setKeyedText('');
            setIsCorrectText(true);
        }
        startRef.current && startRef.current.blur();
    }

    return <><Card className="col-md-9 col-lg-6 mt-4 mx-auto">
        <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
            <span>Type below text</span> <Button variant="primary" ref={startRef} onClick={startLesson}>{lessonStarted}</Button>
        </Card.Header>
        <Card.Body>
            <Card.Text>
                {lessonText}
            </Card.Text>
        </Card.Body>
    </Card>
    <Card className={`col-md-9 col-lg-6 mt-4 mx-auto card-height ${isCorrectText ? "bg-success" : "bg-danger"}`}>
        <Card.Body>
            <Card.Text>
                {keyedText}
            </Card.Text>
        </Card.Body>
    </Card>
    </>
}

export default Lesson;