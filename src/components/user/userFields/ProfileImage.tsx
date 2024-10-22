import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

const Wrapper = styled(Box)(() => ({

    "& img": {
        borderRadius: "50%",
        width: "200px",
        height: "200px",
    },
}));

type StyledImageProps = {
    children: ReactNode;
};

const StyledImage: FC<StyledImageProps> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>; // Use return here
};

const ProfileImage = () => {
    return (
        <StyledImage>
            <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                alt="Profile Picture"
            />
        </StyledImage>
    );
};

export default ProfileImage;
