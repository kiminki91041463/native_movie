import React from "react"
import TVPresenter from "./TVPresenter"
import { tv } from "../../api"
export default class extends React.Component {
    state = {
        loading: true,
        popular: null,
        topRated: null,
        airingToday: null,
    }

    async componentDidMount() {
        let topRated, popular, airingToday, error;
        try {
            ({
                data: { results: topRated }
            } = await tv.getUpcomming());
            ({
                data: { results: popular }
            } = await tv.getPopular());
            ({
                data: { results: airingToday }
            } = await tv.getNowPlaying());
        } catch {
            error = "Can't get TV";
        } finally {
            this.setState({ loading: false, error, topRated, popular, airingToday })
        }
    }
    render() {
        const { loading, topRated, popular, airingToday } = this.state;
        return < TVPresenter
            loading={loading}
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}>
        </TVPresenter>
    }
}