// src/ResourcePage.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getResources, updateResourceStatus } from '../services/resourceService';

function ResourcePage() {
  const { t } = useTranslation();
  const [resources, setResources] = useState(getResources());

  const handleReserve = (resource) => {
    updateResourceStatus(resource.type, resource.id, 'Reserved');
    // Update local state to reflect changes
    setResources(getResources());
    alert(t('resourceReserved')); // Ensure 'resourceReserved' key exists in translations
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t('resources')}
      </Typography>
      <Grid container spacing={2}>
        {resources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{resource.name}</Typography>
                <Typography color="textSecondary">{t(resource.status.toLowerCase())}</Typography>
              </CardContent>
              <CardActions>
                {resource.status === 'Available' ? (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleReserve(resource)}
                  >
                    {t('reserve')}
                  </Button>
                ) : (
                  <Button size="small" disabled>
                    {t('reserved')}
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ResourcePage;
