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
                <tr onClick={() => setDisplayContactForm(true)} style={{ textDecorationColor: 'red' }}>
                    <td>
                        <i className="bi bi-envelope-fill"></i>
                    </td>
                    <td className="willItHover">
                        {response.length > 0 ? <span>{response}</span> : <span>Email</span>}
                    </td>
                </tr>
                <tr
                    onClick={() => handleClick('https://github.com/edward-matthews')}
                    style={{ textDecorationColor: '#24292e' }}
                >
                    <td>
                        <i className="bi bi-github"></i>
                    </td>

                    <td>GitHub</td>
                </tr>
                <tr
                    onClick={() => handleClick('https://www.google.com/search?q=linkedin')}
                    style={{ textDecorationColor: '#2867B2' }}
                >
                    <td>
                        <i className="bi bi-linkedin"></i>
                    </td>

                    <td>LinkedIn</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default SocialMediaTable;
