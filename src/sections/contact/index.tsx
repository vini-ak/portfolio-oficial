import * as S from './style';
import * as C from '../../components';
import SectionType from '../../shared/sections-type';
import { TextField, FormControl, Input, InputLabel, InputAdornment, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import dynamic from 'next/dynamic';

const MyImage = dynamic(() => import("../../components/standup-image"));

const Index = ({...propx}) => {
    return (
        <S.ContactSection id={SectionType.contact}>
            <S.ImageContainer>
                <MyImage src='/assets/contact.jpg' />
                <div className="social-media">
                    <C.SocialMedia rounded={true} />
                </div>
            </S.ImageContainer>

            <S.FormContent>
                <h1>Entre em contato</h1>
                <div className="is-mobile">
                    <C.SocialMedia rounded={true} />
                </div>
                <FormGroup>
                    <S.FormContainer>
                        <S.FormField>
                            <p className="input-label">Seu nome</p>
                            <TextField required fullWidth label="Nome completo" id="fullWidth" />
                        </S.FormField>
                        <S.FormField>
                            <p className="input-label">Seu melhor email</p>
                            <TextField required fullWidth label="Email" id="fullWidth" />
                        </S.FormField>
                        <S.FormField>
                            <p className="input-label">Seu telefone/Whatsapp</p>
                            <TextField fullWidth label="Telefone" id="fullWidth" />
                        </S.FormField>

                        <S.FormField>
                            <p className="input-label">O que você deseja construir?</p>
                            <div>
                                <FormControlLabel control={<Checkbox />} label="Site" />
                                <FormControlLabel control={<Checkbox />} label="App" />
                                <FormControlLabel control={<Checkbox />} label="Sistema Web" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Ainda não sei" />
                            </div>
                        </S.FormField>
                    
                        <S.FormField>
                            <p className="input-label">Conte mais sobre o que precisa fazer</p>
                            <TextField
                                id="outlined-multiline-static"
                                fullWidth
                                multiline
                                rows={4}
                            />
                        </S.FormField>

                        <C.DefaultButton className='button'>Enviar</C.DefaultButton>
                    </S.FormContainer>
                </FormGroup>
            </S.FormContent>

            

        </S.ContactSection>
    )
}

export default Index;