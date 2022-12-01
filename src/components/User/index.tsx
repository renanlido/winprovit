import Image from 'next/image';
import Link from 'next/link';
import { Letter } from '../../core/domain/entities';
import { Header, Avatar, Profile, Body, Content, Title } from './styles';
import bgImage from '../../assets/bg.jpg';
import Post from '../Post';

const UserComponent: React.FC<{ data: Letter }> = ({ data }) => {
  return (
    <>
      <Header>
        <Image src={bgImage} alt="Cover image" fill />

        <Content />
      </Header>
      <Profile>
        <Avatar>
          <Image
            src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
            alt="Avatar"
            width={200}
            height={200}
            color="red"
          />
        </Avatar>
        <h1>{data?.user?.name}</h1>
        <h2>@{data?.user?.username}</h2>
      </Profile>
      <Body>
        <Title>
          <Link href="/">
            <span>Voltar</span>
          </Link>
          <h3>Posts</h3>
        </Title>

        {data.posts.map(post => (
          <Post
            key={data.user.id}
            data={{
              body: post.body,
              name: data.user.name,
              title: post.title,
              userId: data.user.id.toString(),
              username: data.user.username
            }}
          />
        ))}
      </Body>
    </>
  );
};

export default UserComponent;
