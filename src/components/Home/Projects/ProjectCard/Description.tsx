import { Maybe } from 'gql/graphql';
import { stringLimit } from 'helpers/limitString';
import { FC } from 'react';

interface Props {
	description?: Maybe<string>;
}

const TOTAL_CHARS = 100;

const Description: FC<Props> = ({ description }) => {
	return (
		<p className="mb-8 text-base sm:text-xl sm:mb-14">
			{description ? stringLimit(description, TOTAL_CHARS) : 'No description'}
		</p>
	);
};

export { Description };
