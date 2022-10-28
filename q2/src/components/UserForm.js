import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../App"

const UserForm = () => {
    const { user, handleComplete } = useContext(UserContext)
    const [count, setCount] = useState(1);
    const [save, setsave] = useState(false);
    const [retry, setretry] = useState(true);

    const submit = (e) => {
        e.preventDefault()
        const images = ["SirKunt", "nft_drop_here_", "ThePossessedNFT", "GeoffreyHuntley"]

        const { bio, nickname } = e.target
        const biob = bio.value
        const username = nickname.value
        setsave(!save);
        setretry(!retry);
        if (count % 2 === 0) {
            let avatar;
            if (username.length > 5) {
                avatar = images[0]
            }
            else if (username.includes("z")) {
                avatar = images[1]
            }
            else if (username.includes("p") || username.includes("k")) {
                avatar = images[2]
            } else {
                avatar = images[3]
            }
            handleComplete("UPDATE", user, { biob, username, avatar })
        } else {
            console.log(`Error: Fake Error`); return setCount(count + 1);
        }
    }

    return (
        <form onSubmit={submit} >
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                        User Information
                    </Typography>
                    <TextField margin="dense" size="small" value={user.userId} InputProps={{
                        readOnly: true,
                    }} name="userId" id="outlined-basic" label={user.userId} variant="outlined" />{" "}
                    <TextField defaultValue={user.nickName} margin="dense" size="small" name="nickname" id="outlined-basic" placeholder="Nickname" variant="outlined" />
                    <TextField defaultValue={user.bio} margin="dense" placeholder="Bio" size="small" name="bio" label="Bio" variant="outlined" fullWidth id="fullWidth" multiline minRows={4} />
                </CardContent>
                <CardActions>
                    {<Button disabled={save} type="submit" size="small">Save</Button>}
                    <Button disabled={retry} type="submit" size="small">Retry</Button>
                    {<Button type="reset" size="small">Reset</Button>}
                </CardActions>
            </Card>
        </form>
    );
};
export default UserForm;