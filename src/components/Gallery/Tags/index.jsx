import styled from 'styled-components';
import tags from '../../../data/tags.json';

const TagsStyled = styled.div`
  color: #D9D9D9;
  font-size: 24px;
  margin-top: 24px;
  display: flex;
  gap: 24px;
  align-items: center;

  button {
    background: #D9D9D94D;
    color: #FFF;
    height: 48px;
    padding: 8px 12px;
    cursor: pointer;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: background-color 0.3s ease; 

    &:hover {
      border-color: #C98CF1;
    }
  }
`;

const Tags = ({ onFilter }) => {
  return(
    <TagsStyled>
      <h3>Busque por tags:</h3>
      {tags.map(tag => (
        <button key={tag.id} onClick={() => onFilter(tag.id)}>{tag.title}</button>
      ))}
    </TagsStyled>
  );
}

export default Tags;