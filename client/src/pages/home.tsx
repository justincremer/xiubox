import { Modal, ModalParameters } from '../components';

const HomePage: React.FC = () => {
	const params: ModalParameters = {
		title: 'test',
		header: 'test',
		body: 'test',
		cancel: 'test',
		save: 'test',
	};

	return (
		<div className="p-4">
			<Modal parameters={params} />
		</div>
	);
};

export { HomePage };
