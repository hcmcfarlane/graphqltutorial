import "./Animes.css";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const AnimeList = gql`
	query Query($page: Int) {
		Page(page: $page) {
			media {
				siteUrl
				title {
					english
					native
				}
				description
				coverImage {
					medium
				}
				bannerImage
				volumes
				episodes
			}
		}
	}
`;

export default function Animes() {
	const [page, setPage] = useState(1);
	const { loading, error, data } = useQuery(AnimeList, {
		variables: { page: page },
	});

	console.log(data);

	const nextPage = () => {
		setPage(page + 1);
	};

	const prevPage = () => {
		setPage(page - 1);
	};

	return (
		<>
			{loading ? <p>Loading</p> : ""}
			{error ? <p>{JSON.stringify(error)}</p> : ""}
			<div className="anime-cont">
				<h2>List of animes</h2>
				<div className="button-cont">
					{page !== 1 && (
						<button onClick={prevPage}>Previous page</button>
					)}
					<p className="page-text">Page {page}</p>
					<button onClick={nextPage}>Next page</button>
				</div>
				{data?.Page?.media.map((anime) => (
					<div className="anime-card">
						<img
							src={anime.coverImage.medium}
							alt={`Cover of ${anime.title.english}`}
						/>
						<section className="anime-info">
							<h3>
								{anime.title.english} | {anime.title.native}
							</h3>
							<div className="anime-eps">
								Episodes <b>{anime.episodes}</b>
							</div>
							<div className="description">
								<p
									dangerouslySetInnerHTML={{
										__html: anime.description,
									}}></p>
							</div>
						</section>
						<hr width="100%" />
					</div>
				))}
			</div>
		</>
	);
}
