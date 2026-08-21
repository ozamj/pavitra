import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://seva-nirmaan.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


def test_interest_post_saathi(client):
    unique = uuid.uuid4().hex[:8]
    payload = {
        "name": f"TEST User {unique}",
        "email": f"test_{unique}@example.com",
        "phone": "9999999999",
        "city": "Ahmedabad",
        "role": "saathi",
        "message": "hi",
    }
    r = client.post(f"{API}/interest", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["role"] == "saathi"
    assert data["email"] == payload["email"]
    assert "id" in data
    # Verify persistence
    r2 = client.get(f"{API}/interest")
    assert r2.status_code == 200
    emails = [d["email"] for d in r2.json()]
    assert payload["email"] in emails


def test_interest_post_partner(client):
    unique = uuid.uuid4().hex[:8]
    payload = {
        "name": f"TEST Partner {unique}",
        "email": f"partner_{unique}@example.com",
        "role": "partner",
    }
    r = client.post(f"{API}/interest", json=payload)
    assert r.status_code == 200, r.text
    assert r.json()["role"] == "partner"


def test_interest_post_invalid_email(client):
    r = client.post(f"{API}/interest", json={"name": "Bad", "email": "not-an-email", "role": "saathi"})
    assert r.status_code == 422


def test_interest_post_missing_role(client):
    r = client.post(f"{API}/interest", json={"name": "Bad", "email": "a@b.co"})
    assert r.status_code == 422


def test_interest_get_no_objectid(client):
    r = client.get(f"{API}/interest")
    assert r.status_code == 200
    for d in r.json():
        assert "_id" not in d
