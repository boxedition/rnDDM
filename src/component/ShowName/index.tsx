import * as React from 'react';
import { Image, Text } from 'react-native';

interface IShowNameProps {
    name: string
}

const ShowName: React.FC<IShowNameProps> = (props) => {
    const urlName = "https://i1.sndcdn.com/avatars-000689822399-n8zm5q-t500x500.jpg"
    return (
        <>
            <Text>{props.name}</Text>
            {props.name === ("Jeff").toLowerCase() && <>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                        uri: urlName,
                    }} />
            </>
            }
        </>
    )
};

export default ShowName;
