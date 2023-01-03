import * as S from './style';
import * as C from '../../components';
import SectionType from '../../shared/sections-type';
import { TextField, FormControl, Input, InputLabel, InputAdornment } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

const Index = ({...propx}) => {
    return (
        <S.ContactSection id={SectionType.contact}>
            <S.ImageContainer>
                <C.StandupImage src='/assets/contact.png' />
                <div className="social-media">
                    <C.SocialMedia rounded={true} />
                </div>
            </S.ImageContainer>

            <S.FormContainer>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="standard-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </S.FormContainer>

        </S.ContactSection>
    )
}

export default Index;