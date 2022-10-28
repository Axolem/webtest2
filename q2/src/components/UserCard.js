import { useContext } from "react";
import Avatar from "react-avatar";
import { UserContext } from "../App";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { CardContent, Grid, Typography } from "@mui/material";

const UserCard = () => {
    const { user } = useContext(UserContext)
    return (
        <form style={{ textAlign: "left", marginTop: "50px" }}>
            <Container>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar twitterHandle={user.avatar ? user.avatar : "sitebase"} size="100" textSizeRatio={1.75} />
                            </Grid>
                            <Grid item >
                                <Typography variant="h6" color="text.secondary" component="div">
                                    {user.nickName ? user.nickName : "No name"}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom>
                                    {user.bio ? user.bio : "Enter some bio to see some magic"}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </form>
    );
};
export default UserCard;