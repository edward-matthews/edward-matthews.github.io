import React from 'react';
import Table from 'react-bootstrap/Table';
interface Props {
    response: string;
    setDisplayContactForm: (value: boolean) => void;
}

const SocialMediaTable: React.FC<Props> = ({ response, setDisplayContactForm }: Props) => {
    function handleClick(destination: string) {
        window.location.href = destination;
    }
    return (
        <Table borderless hover>
            <tbody>
                <tr
                    onClick={() => setDisplayContactForm(true)}
                    style={{ textDecorationColor: 'red' }}
                    className="unusual-link"
                >
                    <td>
                        <i className="bi bi-envelope-fill"></i>
                    </td>
                    <td>{response.length > 0 ? <span>{response}</span> : <span>Message</span>}</td>
                </tr>
                <tr
                    onClick={() => handleClick('https://github.com/edward-matthews')}
                    style={{ textDecorationColor: '#24292e' }}
                    className="unusual-link"
                >
                    <td>
                        <i className="bi bi-github"></i>
                    </td>

                    <td>GitHub</td>
                </tr>
                <tr
                    onClick={() => handleClick('https://www.linkedin.com/in/matthewsedwardj')}
                    style={{ textDecorationColor: '#2867B2' }}
                    className="unusual-link"
                >
                    <td>
                        <i className="bi bi-linkedin"></i>
                    </td>

                    <td>LinkedIn</td>
                </tr>
                <tr
                    onClick={() => handleClick('https://twitter.com/matthewsedwardj')}
                    style={{ textDecorationColor: '#00acee' }}
                    className="unusual-link"
                >
                    <td>
                        <i className="bi bi-twitter"></i>
                    </td>

                    <td>Twitter</td>
                </tr>
                {/* <tr
                    onClick={() => handleClick('https://www.google.com/search?q=youtube')}
                    style={{ textDecorationColor: '#c4302b' }}
                    className="unusual-link"
                >
                    <td>
                        <i className="bi bi-youtube"></i>
                    </td>

                    <td>YouTube</td>
                </tr> */}
            </tbody>
        </Table>
    );
};

export default SocialMediaTable;
