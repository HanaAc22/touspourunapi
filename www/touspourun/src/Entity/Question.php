<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Serializer\Filter\PropertyFilter;
use App\Repository\QuestionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use DateTimeImmutable;
use Symfony\Component\Serializer\Annotation\Groups;
use function Symfony\Component\String\u;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
#[ApiResource(operations: [new Get( uriTemplate: '/question/{id}'), new GetCollection(), new Post(), new Put(), new Patch()],
    normalizationContext: [ 'groups' => ['question:read'] ],
    denormalizationContext: [ 'groups' => ['question:write'] ],
    paginationItemsPerPage: 10,
)]
#[ApiFilter(PropertyFilter::class)]
class Question
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['question:read', 'question:write'])]
    #[ApiFilter(SearchFilter::class, strategy: 'partial')]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['question:read', 'question:write'])]
    private ?string $question = null;

    #[ORM\Column]
    #[Groups('question:read')]
    private ?\DateTimeImmutable $createdAt;

    #[ORM\Column]
    #[ApiFilter(BooleanFilter::class)]
    private ?bool $isPublished = false;

    public function __construct(){
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getQuestion(): ?string
    {
        return $this->question;
    }

    #[Groups(['question:read'])]
    public function getShortQuestion(): ?string
    {
        return u($this->question)->truncate(30, '...');
    }

    #[Groups('question:write')]
    public function setQuestion(string $question): self
    {
        $this->question = $question;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function isIsPublished(): ?bool
    {
        return $this->isPublished;
    }

    public function setIsPublished(bool $isPublished): self
    {
        $this->isPublished = $isPublished;

        return $this;
    }

}
