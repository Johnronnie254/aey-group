"""empty message

Revision ID: 073edf38a724
Revises: 
Create Date: 2024-01-31 16:37:19.494255

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '073edf38a724'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('authors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('age', sa.String(), nullable=False),
    sa.Column('country', sa.String(), nullable=False),
    sa.Column('book_genre', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('books',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('book_name', sa.String(), nullable=False),
    sa.Column('ISBN', sa.String(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['authors.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('book_name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('books')
    op.drop_table('authors')
    # ### end Alembic commands ###
