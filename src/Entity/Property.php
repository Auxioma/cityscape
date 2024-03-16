<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\TimestampTraits;
use App\Repository\PropertyRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: PropertyRepository::class)]
#[HasLifecycleCallbacks]
class Property
{
    use TimestampTraits;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $propertyTitle = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 0)]
    private ?string $price = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 0)]
    private ?string $Area = null;

    #[ORM\Column(length: 255)]
    private ?string $room = null;

    #[ORM\ManyToOne(inversedBy: 'properties')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $AgentImmobilier = null;

    #[ORM\OneToMany(targetEntity: Pictures::class, mappedBy: 'Property')]
    private Collection $pictures;

    #[ORM\OneToMany(targetEntity: Amenities::class, mappedBy: 'property')]
    private Collection $amenities;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Longitude = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Latitude = null;

    #[ORM\ManyToOne(inversedBy: 'properties')]
    private ?Category $Category = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    public function __construct()
    {
        $this->pictures = new ArrayCollection();
        $this->amenities = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPropertyTitle(): ?string
    {
        return $this->propertyTitle;
    }

    public function setPropertyTitle(string $propertyTitle): static
    {
        $this->propertyTitle = $propertyTitle;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getArea(): ?string
    {
        return $this->Area;
    }

    public function setArea(string $Area): static
    {
        $this->Area = $Area;

        return $this;
    }

    public function getRoom(): ?string
    {
        return $this->room;
    }

    public function setRoom(string $room): static
    {
        $this->room = $room;

        return $this;
    }

    public function getAgentImmobilier(): ?User
    {
        return $this->AgentImmobilier;
    }

    public function setAgentImmobilier(?User $AgentImmobilier): static
    {
        $this->AgentImmobilier = $AgentImmobilier;

        return $this;
    }

    /**
     * @return Collection<int, Pictures>
     */
    public function getPictures(): Collection
    {
        return $this->pictures;
    }

    public function addPicture(Pictures $picture): static
    {
        if (!$this->pictures->contains($picture)) {
            $this->pictures->add($picture);
            $picture->setProperty($this);
        }

        return $this;
    }

    public function removePicture(Pictures $picture): static
    {
        if ($this->pictures->removeElement($picture)) {
            // set the owning side to null (unless already changed)
            if ($picture->getProperty() === $this) {
                $picture->setProperty(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Amenities>
     */
    public function getAmenities(): Collection
    {
        return $this->amenities;
    }

    public function addAmenity(Amenities $amenity): static
    {
        if (!$this->amenities->contains($amenity)) {
            $this->amenities->add($amenity);
            $amenity->setProperty($this);
        }

        return $this;
    }

    public function removeAmenity(Amenities $amenity): static
    {
        if ($this->amenities->removeElement($amenity)) {
            // set the owning side to null (unless already changed)
            if ($amenity->getProperty() === $this) {
                $amenity->setProperty(null);
            }
        }

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->Longitude;
    }

    public function setLongitude(?string $Longitude): static
    {
        $this->Longitude = $Longitude;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->Latitude;
    }

    public function setLatitude(?string $Latitude): static
    {
        $this->Latitude = $Latitude;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->Category;
    }

    public function setCategory(?Category $Category): static
    {
        $this->Category = $Category;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }
}
